import { NextResponse } from 'next/server'
import { db } from '@/src/supabase/database'
import { users } from '@/src/db/schema'
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()

    const existingUser = await db.select()
      .from(users)
      .where({ email })
      .limit(1)

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await db.insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning()

    return NextResponse.json(
      { user: newUser[0], message: 'Registration successful' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
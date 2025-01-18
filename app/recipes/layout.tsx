import { Navigation } from "./__components/navigation";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}

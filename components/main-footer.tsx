export default function MainFooter() {
  const now = new Date();

  return (
    <footer>
      <p className="text-sm text-muted-foreground py-14 border-t">
        &copy; 2020 - {now.getFullYear()} / Dipesh B C
      </p>
    </footer>
  );
}

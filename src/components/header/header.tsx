import "./header.css";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title">Fruits</h1>
      {children}
    </header>
  );
}

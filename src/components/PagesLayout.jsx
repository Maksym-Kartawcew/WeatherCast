import Header from "./Header";

export default function PagesLayoyt({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}



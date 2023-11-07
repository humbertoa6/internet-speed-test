import * as React from "react";
import ReactDOM from "react-dom/client";
import PlacesList from "./places_list";

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return (
    <div>
      {`Hello, ${arg}!`}
      <PlacesList />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App arg="Rails 7 with ESBuild" />);
});
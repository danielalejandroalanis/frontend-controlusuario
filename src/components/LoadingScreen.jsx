import "../sass/LoadingScreen.scss";
import { Ping } from "@uiball/loaders";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Ping size={45} speed={2} color="black" />
    </div>
  );
}

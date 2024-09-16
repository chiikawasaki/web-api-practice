import "./App.css";
import ImageGrallery from "./ImageGrallery";

function App() {
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form>
        <input type="text" placeholder="画像を探す" />
        <ImageGrallery />
      </form>
    </div>
  );
}

export default App;

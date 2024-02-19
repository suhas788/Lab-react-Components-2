import './App.css';
import GallaryBody from './components/GallaryBody';
import GallaryHeader from './components/GallaryHeader';
import GallaryFooter from './components/GallaryFooter';


function App(props) {
  const imageData = props.data;
  return (
    <div>
      <GallaryHeader/>
      <GallaryBody imageData={imageData}/>
      <GallaryFooter/>
    </div>
  )
}

export default App;
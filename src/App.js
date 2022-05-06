import {useEffect,useState} from 'react'
import './App.css';
import CustomNavBar from './components/CustomNav/CustomNav'
import CustomTable from './components/ui/CustomTable/CustomTable'
// import {data} from './data'
import axios from 'axios'
function App() {
    const [myData,setMyData] = useState([])
    const [photos,setPhotos] = useState([])

    const getMyData = async () => {
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setMyData(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    } 

    const getPhotos = async () => {
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setPhotos(data)
        
      } catch (error) {
        console.error(error)
      }
    } 
  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(res => setMyData(res.data))
    // .catch(err => console.error(err))

    getMyData()
    getPhotos()

  }, [])
  
  return (
    <div className="App">
       <CustomNavBar />
       <CustomTable data={myData} photos={photos}  />
      
    </div>
  );
}

export default App;

import { useRef, useState, useEffect } from 'react'
import Navigation from "./Component/Navigation";
import Body from './Component/Body';
import axios from "axios";

function App() {
  // On Click Navigation Feature
  const sectionRef = {
    serviceRef: useRef(null),
    technologyRef: useRef(null),
    portfolioRef: useRef(null),
    contactRef: useRef(null),
  }
  const sectionClick = (section) => {
    sectionRef[section].current?.scrollIntoView({ behavior: "smooth" });
  }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Fetching data from api also Dstabase connection logic
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fectchdata();
  }, []);

  const fectchdata = async () => {
    await axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  // Sending data on DATABASE

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')


  const adduser = async (e) => {
    e.preventDefault();  // Prevent the page from reloading

    if (!name || !email || !message) { alert('Input is Invalid. Please Enter Valid Content.') }

    try {
      const response = await axios.post("http://localhost:5000/users", { name, email, message });
      fectchdata();
      setname('');
      setemail('');
      setmessage('');
    } catch (error) {
      console.error("Request setup error:", error.message);
    }
  };

  // const adduser = async (e) => {
  //   console.log('ha meri jaan');

  //   e.preventDefault()

  //   if (!name || !email) return alert("Please fill all fields");
  //   try {
  //     await axios.post("http://localhost:5000/users", { name, email, message });
  //     fectchdata();
  //     setname('');
  //     setemail('');
  //     setmessage('');
  //   } catch (error) {
  //     console.error("Error adding user:", error);
  //   }

  // }

  return (
    <>

      <Navigation serviceClick={sectionClick} />
      <Body sectionRef={sectionRef} serviceClick={sectionClick} users={users} adduser={adduser} setname={setname} setemail={setemail} setmessage={setmessage} />
      {
        showButton && (

          <button onClick={scrollToTop} className='btn btn-outline px-3 border shiny-text position-fixed boxtextshadow' style={{ right: 60, bottom: 80 }}><i className='fa-solid fa-up-long fs-3 '></i></button>

        )
      }
    </>
  );
}

export default App;

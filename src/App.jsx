import Form from "./components/Form"
import logo from "./assets/logo.png"

function App() {

  return (
    <div className="text-gray-600">
      <img src={logo} alt="Wobot.ai logo" className="fixed top-[20px] left-[30px] w-[150px] h-[60px] "/>
      <div className="w-[500px] absolute top-[4%] bottom-[50%] left-[32%]">
        <Form/>
      </div>
    </div>
  )
}

export default App

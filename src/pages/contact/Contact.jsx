import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";



import TextField from "@mui/material/TextField";
const Contact = () => {
  

  
  return (
    <>
      <div id="contact" className="flex flex-col md:item-center p-6 space-x-6 text-center w-full min-h-screen bg-slate-800">
        <h1 className="text-white text-4xl mb-10">Get In Touch</h1>

        <div className="flex flex-row justify-start w-full text-start space-x-6 flex-wrap  space-y-3">
          <div className="md:w-1/2 w-2/3   space-y-6">
            <h1 className="text-3xl font-bold">Get In Touch</h1>
            <form action="" className="flex flex-col space-y-4 "  >
         
       <TextField
                id="outlined-basic"
                label="Name"
                placeholder="Your Name"
                variant="outlined"
                type="text"
                name="user_name"
                className="bg-slate-700"
                required
              />
      
              
              <TextField
                id="outlined-basic"
                label="Email"
                name="user_email"
                variant="outlined"
                type="email"
                className="bg-slate-700"
                required
              />
              <TextField
                id="outlined-basic"
                label="Phone"
                name="phone"
                variant="outlined"
                type="tel"
                className="bg-slate-700"
               
                
              />
              <TextField
                id="outlined-basic"
                multiline
                label="Message"
                name="message"
                variant="outlined"
                className="bg-slate-700"
                rows={5}
                maxRows={4}
                
                
              />
             
              <Button variant="contained" type="submit"  endIcon={<SendIcon /> }  sx={{ borderRadius: 28 }} color="success" className="md:w-1/2 flex">
                SEND MESSAGE
              </Button>
            </form>
           

          </div>
          <div className="space-y-6">
            <p className="text-3xl font-bold">My Contact Details</p>
            <div className="space-y-3 text-md font-bold">
              <p className="text text-blue-900  ">Email</p>
              <p className="text text-neutral-950 ">msrm3597@gmail.com</p>
              <p className="text text-blue-900 ">Phone</p>
              <p className="text text-neutral-950 ">212652610905</p>
              <p className="text text-blue-900 ">Address</p>
              <p className="text text-neutral-950 ">
                N° 154 BOULIVARD EL HASSAN 1ER QUARTIER EL OUAHDA KHÉMISSET
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

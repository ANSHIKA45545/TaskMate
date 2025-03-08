export const Register = () =>{
    return(
      <>
      <p className="register-head">Register Here</p>

<form className="form-container">
<div className="form-group">
    <label for="name" className="label">Your Name</label>
    <input type="name" id="name" className="input-field" placeholder="Username" required />
  </div>
  <div className="form-group">
    <label for="email" className="label">Your email</label>
    <input type="email" id="email" className="input-field" placeholder="name@flowbite.com" required />
  </div>
  <div className="form-group">
    <label for="password" className="label">Your password</label>
    <input type="password" id="password" className="input-field" required />
  </div>
  
  <div className="checkbox-group">
    <div className="checkbox">
      <input id="terms" type="checkbox" value="" className="" required />
    </div>
    <label for="terms" className="terms-label">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" className="submit-button">Register</button>
</form>

</>

    )
}
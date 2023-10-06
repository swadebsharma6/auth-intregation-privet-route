import { sendEmailVerification } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        // create user
        createUser(email, password)
        .then(result =>{
            const user = result.user;
              // user email verify
              sendEmailVerification(user)
              .then(()=>{
                  console.log('Please Verify your Email.')
              })
             console.log('created user', user);
            alert('User created successfully')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <section>
        <div className="hero min-h-[80vh] rounded bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-purple-400 font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Register;
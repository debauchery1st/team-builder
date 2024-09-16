import React, { useEffect } from 'react';

const formValidates = (name, email, role) => {
    // debugger
    if (!email.length > 3 || !email.includes('@')) {
      alert("must have a valid email address");
      return false;
    }
    if (name.length === 0) {
      alert("must have a name");
      return false;
    }
    if (!role.length > 5) {
      alert("describe role");
      return false;
    }
    // if (Object.keys(teamMembers).includes(formData.email)) {
    //   alert("That email address has already signed up.")
    //   return false;
    // }
    return true
  }

const SignUpForm = (props) => {

    useEffect(() => {
        console.log("mounted sign up form");
        return () => console.log("dismounted sign up for")
    }, []);

    return (
        <form 
        onSubmit={(ev) => {
            ev.preventDefault();
            if (!formValidates(
                props.info.name,
                props.info.email,
                props.info.role
            )) {
                return false
            }
            
            props.onSubmit({
            ...props.teamMembers,
            [props.info.email]: {
                name: props.info.name,
                role: props.info.role
            }
            })
            ev.currentTarget.reset();
        }}
        onChange={props.onChange} 
        className="TeamMember form" 
        action="" method="get">
        
        <div className="TeamMember name">
          <label htmlFor="GET-name">Name</label>
          <input id="GET-name" type="text" name="name"  />
        </div>

        <div className="TeamMember email">
          <label htmlFor="GET-email">Email</label>
          <input id="GET-email" type="text" name="email"/>
        </div>

        <div className="TeamMember role">
          <label htmlFor="GET-role">Role</label>
          <input id="GET-role" type="text" name="role" />
        </div>

        <div className="TeamMember save">
          <input className="TeamMember save btn" type="submit" value="Save" />
        </div>

      </form>
    )
}

export default SignUpForm

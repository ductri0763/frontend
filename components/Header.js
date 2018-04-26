import Link from "next/link";

export default ({ pathname="/", authenticated=1, query = false }) =>
  <header>
   
  

    {!authenticated &&
      <Link prefetch href="/login">
        <a className={pathname === "/login" && "is-active"}>Login</a>
      </Link>}

    {!authenticated &&
      <Link prefetch href="/register">
        <a className={pathname === "/register" && "is-active"}>Register</a>
      </Link>}
	  

    
	
	

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>;

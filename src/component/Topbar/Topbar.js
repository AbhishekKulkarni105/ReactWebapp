import React from 'react';
import classes from './Topbar.module.css';


const Topbar =() =>{
    return(
        <div className ={classes.MainTopbar}>
        <header className={classes.Topbar}>
       <span>        <img className ={classes.Logo} src="https://www.premiumhub.site/wp-content/uploads/2021/03/Image.svg" alt = 'logo'/>
        <span className={classes.Title}>AFC Inc.</span>
        </span>
        
     <nav >
        <a className={classes.Menu1}>Track Application</a>
        <a className={classes.Menu2}>Manage My Card</a>
        <a className={classes.Menu3}>FAQs</a>
        <button className={classes.Btn}>Get Started</button>
        </nav>
<div className={classes.Icon}>
        <i class="fas fa-bars"></i>
        </div>


        </header>
        </div>
    )
}

export default Topbar;
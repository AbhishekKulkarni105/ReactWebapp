import React from 'react';
import  classes from './Footer.module.css'


const Footer =() =>{
    return(
<div className={classes.MainFooter}>

<div className={classes.Heading}>
<p>OneSync Credit Card
</p>
<div className={classes.SmHeading}>
<p>Experience Freedom 
</p>
</div>
</div>
<button className={classes.Btn}> Get Started</button>

<p className={classes.Divider3}></p>

<div className={classes.Menuitem}>
<div className={classes.FooterMenu}>
<p className={classes.Menu}>Manage Your Card</p>
<p className={classes.Menu}>Track Your Application</p>
<p className={classes.Menu}>Contact Us</p>

</div>
<div className={classes.ResFoo}>
<div className={classes.FooterMenu1}>
<p className={classes.Menu}>Manage Your Card</p>
<p className={classes.Menu}>Track Your Application</p>
<p className={classes.Menu}>Contact Us</p>

</div>
<div className={classes.FooterMenu2}>
<p className={classes.Menu}>Manage Your Card</p>
<p className={classes.Menu}>Track Your Application</p>
<p className={classes.Menu}>Contact Us</p>

</div>
<div className={classes.FooterMenu3}>
<p className={classes.Menu}>Manage Your Card</p>
<p className={classes.Menu}>Track Your Application</p>
<p className={classes.Menu}>Contact Us</p>

</div>
</div>
</div>

</div>

    )
} 

export default Footer;
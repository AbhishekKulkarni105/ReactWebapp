import React from 'react';
import classes from './LandingSection.module.css';


const LandingSection =() =>{
    return(
        <div className={classes.MainLandingSection}>
        
        <div className={classes.SectionOne}>
       
        <p className={classes.SectionParaBig}>Build a Credit Card
        That is Definitely Yours</p>
        <p className={classes.SectionParasmall}> With the OneSync Credit Card you can customise your card the way you want</p>
       
        <button className={classes.SecBtn}>Get Started</button>    
        <img className={classes.Section1img} src="https://www.premiumhub.site/wp-content/uploads/2021/03/gif.svg"/>    
        </div>
        
        
        <div className={classes.SectionTwo}>
        <div className={classes.SectionMenu} >
        <p className={classes.SectionPara}>The Freedom to Create
        The Credit Card You Want</p>
        <p className={classes.Content}>That's why it comes with benefits & rewards chosen by you. Available in multiple designs, your card comes in a style selected by you. You can come back each year, to edit your benefits or update your style.</p>
       <p className={classes.SmallContent1}>Your OneSync Credit Card stays true to you, year after year. It’s the only card you’ll ever need.</p>
       <form>
        <label >
        <input className={classes.InFormResponsive} type="text" id='number' placeholder='Select City'/>
        </label>
        </form>
        
       <a className={classes.SectionResponseBtn}>Go</a>
        
       <a className={classes.SectionBtn}>Get Started</a>
        
       <a className={classes.Icon}>
       <i class="fas fa-chevron-right" ></i>
       </a>
       </div>
        </div>

        <div className={classes.SectionThree}>
        <div className={classes.PartOne}>
        <div className={classes.SubPart}>
        <form>
        <label >
        <input className={classes.InForm} type="text" id='number' placeholder='Enter Your Phone Number'/>
        <input className={classes.InForm} type="text" id='number' placeholder='Enter Your PAN Number'/>
        <input className={classes.InFormBlur} type="text" id='number' placeholder='Enter Your Address'/>
    
        </label>
        </form>
         <p className={classes.Fill}>Fill Eligibility Form</p>
        <p className={classes.FillSub}>Tell us about yourself, to find out if you’re eligible to apply.</p>
        <img className={classes.SecIcon} src="https://www.premiumhub.site/wp-content/uploads/2021/03/Vector-2.png"></img>
        <img className={classes.SecIconSmall} src="https://www.premiumhub.site/wp-content/uploads/2021/03/Vector-1.png"></img>
      
        </div>
       
        </div>
        </div>

        <div className={classes.Responsive}>
        
        <p className={classes.ResPara}>Create your own credit card in three easy steps</p>
        
        <div className={classes.ResSec}>
        <button className={classes.Btn}>Gender</button>
        <button className={classes.Btn1}>Address</button>
        <button className={classes.Btn2}>Email Address</button>
        <button className={classes.Btn3}>City</button>
        <button className={classes.Btn4}>Phone no</button>
        <button className={classes.Btn5}>Pan NO</button>
        <button className={classes.Btn6}>Name</button>
        </div>
     
        </div>



        
        </div>
    )
}

export default LandingSection;
# Health insurance - Serverside
https://health-insure.netlify.app/
##  Landing page UI
![image](https://user-images.githubusercontent.com/101511565/213957553-acd83a45-9580-4398-8ee7-c8b47ed021d8.png)

##  Technology Stack
<p float="left">
  <img src="https://expressjs.com/images/express-facebook-share.png" width="170px" height="70px" />  
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" width="110px" height="70px" />  
</p>

## User Story
  Hello, there let's explain what happen in client side. First once user get into the landing page they will clearly see the the navigation bar up top
  and below the nav bar they will see an introduction page that explain about all critical disease definition and all other importance information 
  to help customer gain more knowledge about the disease and also health insurance package and protection, without any need to registration. After the customer 
  go through all of the information they can dicide either they want to leave a page or go into other link such as registration, all packages. So, After they finish
  registration they will be able to log in using their username and password and they just regist. After that they can go to look up on insurance packages to see
  what suit them the most. Finally, in case they still have question to ask for they can look down on the footer they will see the contact for Dhipaya for more detail.

## ER Diagram 
   https://www.canva.com/design/DAFZLp4_208/grSF_s8h3xkRm_N6_wFLCg/view?utm_content=DAFZLp4_208&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton <br />
   There are two table table linked together the first one is 'Insurance Package' which contain an importannt detail that the user need to know such as Price, description
   and buydate. Secondly, next table is 'User' table which also contain all neccessary information about particular user for example username, password(already hashed using jwt token)
   , firstname, lastname, phone, address, email and package_id that the user buy(in case they end up buying it).

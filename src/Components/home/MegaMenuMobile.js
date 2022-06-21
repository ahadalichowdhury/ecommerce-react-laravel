import React, { Component } from 'react'

export default class MegaMenuMobile extends Component {

  menuItemClick=(event)=>{
    event.target.classList.toggle("activeMobile");
    let panel= event.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight= null;
    }else{
      panel.style.maxHeight=panel.scrollHeight+ "px";
    }


  }

  render() {

    return (
      <div className='accordionMenuDivMobile'>
        <div className='accordionMenuDivInsideMobile'>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
          <button onClick={this.menuItemClick} className='accordionMobile'> <img className='accordionMenuIconMobile' src="https://th.bing.com/th/id/R.6298b026a65cf80bcf9dce061e9b79c9?rik=H6BNz26Zn48Zpw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png&ehk=6q7ZLSzSB1YrJRf9hCuSPeOerqEJ7s5uQH3R2TUYc%2bI%3d&risl=&pid=ImgRaw&r=0" alt="" />  Men's Clothing</button>
          <div className='panelMobile'>
            <ul>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
              <li><a href="aaaa" className='accordionItemMobile'>Man shirt</a></li>
            </ul>
          </div>
         
          
        </div>
      </div>
    )
  }
}

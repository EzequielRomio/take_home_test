# take_home_test
_This app shows it owns commits history_

## Compatibility ▶️
<table>
  <tbody>
    <tr>
      <th></th>
      <th><br/><image src="https://github.com/alrra/browser-logos/blob/main/src/chrome/chrome.png" width="31" height="30" /><p>&nbsp;Chrome&nbsp;</p></th>
      <th><br/><image src="https://github.com/alrra/browser-logos/blob/main/src/firefox/firefox.png" width="31" height="30" /><p>&nbsp;&nbsp;Firefox&nbsp;&nbsp;</p></th>
      <th><br/><image src="https://github.com/alrra/browser-logos/blob/main/src/edge/edge.png" width="31" height="30" /><p>&nbsp;&nbsp;&nbsp;Edge&nbsp;&nbsp;&nbsp;</p></th>
      <th><br/><image src="https://github.com/alrra/browser-logos/blob/main/src/safari/safari.png" width="31" height="30" /><p>&nbsp;&nbsp;Safari&nbsp;&nbsp;</p></th>
      <th><br/><image src="https://github.com/alrra/browser-logos/blob/main/src/opera/opera.png" width="31" height="30" /><p>&nbsp;&nbsp;Opera&nbsp;&nbsp;</p></th>
    </tr>
    <tr>
      <th><h6>&nbsp;&nbsp;&nbsp;&nbsp;Windows&nbsp;&nbsp;&nbsp;&nbsp;</h6></th>
      <th>
        ✔️
      </th>
      <th>
        ✔️ 
      </th> 
      <th>
        ✔️
      </th>
      <th>
        ❌
      </th>
      <th>
        ✔️
      </th>
    </tr>
    <th><h6>Mac</h6></th>
      <th>
        ✔️
      </th>
      <th>
        ✔️ 
      </th> 
      <th>
        ✔️
      </th>
      <th>
        ✔️
      </th>
      <th>
        ✔️
      </th>
    </tr>
  </tbody>
</table>

## Built with 🧰
<ul >
  <li > 
    HTML5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.w3.org/html/" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="26" height="26"/> 
    </a>
  </li>

  <li> CSS3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.w3schools.com/css/" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="26" height="26"/> 
    </a>
  </li>
  <li> Bootstrap 5.0 &nbsp;
    <a href="https://getbootstrap.com" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="26" height="26"/> 
    </a>
  </li>
  <li> JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20"/> 
    </a>
  </li>
  <li> React.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://reactjs.org/" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="26" height="26"/> 
    </a>
  </li>
  <li> Redux.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://redux.js.org" target="_blank"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="24" height="24"/> 
    </a>
  </li>
</ul>
  

## Installation 🔧

You’ll need to have **Node 10.16.0** or later version on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. Installation instructions <a href="https://nodejs.org/es/download/" target="_blank"> here </a>.<br/>
<h5>Open your CLI and run the next commands in order</h5>
<p> 1️⃣ <code>cd &lt;your_directory&gt;</code> </p>
<p> 2️⃣ <code>git clone https://github.com/EzequielRomio/take_home_test.git</code> or <a href="https://github.com/EzequielRomio/take_home_test/archive/refs/heads/main.zip">Download Zip</a>, extract it, and <code>cd &lt;unzipped_repo_path&gt; </code> </p>    
<p> 3️⃣  <code>npm install</code></p>
<p> 4️⃣ <code>npm start</code> The app will automatically starts on a new window or tab of your default browser </p>
  
## Technical Notes 📝

I decided to make this a front-end-only project since the data provided by **GitHub's REST API** is good enough for current requirements. For new requirements/functionalities, I would probably add a Node.js back-end app to connect with my front-end React app. This back-end would provide a middle layer for authentication, validations, data transformation, etc...

Requested endpoints:<br/>
 🔹 GET <a href="https://docs.github.com/en/rest/reference/repos#list-commits" target="_target">https://api.github.com/repos/{owner}/{repo}/commits</a><br/> 
 🔹 GET <a href="https://docs.github.com/en/rest/reference/repos#get-a-commit" target="_target">https://api.github.com/repos/{owner}/{repo}/commits/{ref}</a>

**take_home_test** is not a real-time view page, needs a manually refresh to get updated.  

Have you found a bug? please feel free to leave an <a href="https://github.com/EzequielRomio/take_home_test/issues/new/choose" target="_blank">issue</a>

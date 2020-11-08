# XSS Attacks

## What is it?
Cross Site Scripting (XSS) is a client-side security risk that enables an attacker to inject malicious code into a vulnerable website. XSS vulnerabilities often allow the attacker to mask themselves as a victim user and provides them with access to the victim users data and website permissions.

It's currently number 7 in OWASP's top 10 security vulnerabilities. A number which has been decreasing year on year, potentially due to an increased usage of modern browsers and frameworks.

## How does it work?
Cross Site Scripting works by posting malicious scripts to a vulnerable website which can then be executed in the victims browser. Once the scripts run on a victims browser, the attacker has access to any of the users browser storage data i.e session cookies and auth tokens. 

## Types of XSS
There are 3 main types of XSS. These are Reflected, Persistent/Stored and DOM-based.

### Reflected

Reflected XSS is the most common type of XSS. It's when an attacker constructs a url with malicious code and then sends this to a user. The user is then tricked into clicking the url which then sends the code to the website.

Reflected XSS isn't permanent so the attacker must send each user malicious code every time, which is why the most common way we see reflected XSS is with phishing emails/messages.

#### Example

An attacker sends a phishing email to a user with a link thats actually a url with some malicious params attached to it that extract the users cookies and redirects the user to their evil website. The user then clicks the link in their email and is then sent to the relevant website, the website is redirected to the attackers website and now the attacker can view their server logs and use the victims cookies.

### Persistent/Stored

Persistent XSS occurs when the attacker is able to inject malicious code into an application, its database or the web server thats serving the application. If the application does not sanitise inputs then the code is permenently stored by the application. Then once any user loads the application, the malicious code is ran and the attacker is able to steal a users data that is stored in the browser.

#### Example

Given a webpage that allows users to post comments, if the inputs are not sanitised, an attacker could submit a piece of code that extracts the users browser storage (local, cookies etc) and makes an api request to their server. The code is then stored in the database on submission.

So, whenever any user visits the webpage and loads the comments, the script is then executed in the browser, enabling the attacker to steal each subsequent users information.

### DOM-based

DOM-based XSS is a risk when an application contains client-side JavaScript (i.e inputs, textareas) that process data in an unsafe way. It can be a combination of Persistent and Reflected XSS. It happens when an attacker creates a link with some malicious code and then they get the victim to click on the link which allows the code to run on the browser.

#### Example

An attacker could construct a link that contains malicious javascript code and then they send this to the user. The user recognises the applications url but doesnt notice the evil code that has been appended to it, so the user then opens the link in their browser.

The data for the website then gets loaded on the page along with the malicious code thats been attached to the url. The code is then inserted into the HTML and then the attacker can perform actions on behalf of the user.

## How We Can Prevent XSS Attacks

- Santise inputs/data on the frontend and backend by encoding/escaping values
- Use appropriate validation for form inputs
- Avoid insecure methods of displaying data in webpages (i.e innerHTML, eval() etc)
- Sanitise url parameters by encoding/escaping the values
- Avoid using javascript urls
- Keep all external sources up to date, run regular security audits to ensure the packages are secure (i.e npm, yarn)

## How Modern Frameworks Prevent XSS

A lot of modern frameworks escape data safely before rendering it on a webpage, they can also escape url parameters and prevent external JavaScript being executed on the webpage.

### React

#### Data Binding
JSX excapes any values that are not written inside the application code. Before rendering anything, it will convert all data into a string. 

Example:
```
const App = () => {
  const input = 'Hello, <img src onerror="alert(0)" />';

  return (
    <div>
      { input }
    </div>
  );
}
```

The browser will output `Hello, <img src onerror="alert(0)" />` as a string as opposed to adding the img tag in the DOM. If this was loaded directly into the dom, then the browser would execute the JS method: `alert(0)` which would then make the alert window pop up.

#### 

### NextJS

## More Information

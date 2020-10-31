# XSS Attacks

## What is it?
Cross Site Scripting (XSS) is a client-side security risk that enables an attacker to inject malicious code into a vulnerable website. XSS vulnerabilities often allow the attacker to mask themselves as a victim user and provides them with access to the victim users data and website permissions.

## How does it work?
Cross Site Scripting works by posting malicious scripts to a vulnerable website which can then executed in the victims browser. Once the scripts run on a victims browser, the attacker has access to any of the users browser storage data i.e session cookies and auth tokens. 

The attackers script can then pull that data from the browser storage and post this back to their own servers. They are then able to use this information to login to the website as the user.

## Types of XSS
There are 3 main types of XSS. These are DOM-based, Reflected and Stored.
 
### DOM-based

DOM-based XSS is a risk when an application contains client-side JavaScript (i.e inputs, textareas) that process data in an unsafe way.

### Reflected

### Stored

## How to Defend Against it

## How Modern browsers and frameworks prevent it

## NextJS Example

## VanillaJS Example


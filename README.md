# AIM
Students will learn the fundamental principles of computer and network security by studying attacks on computer systems, networks, and the Web. Students will learn how those attacks work and how to prevent and detect them.

## OBJECTIVES
- To understand Hypertext Transfer Protocol Secure.
- To understand the cryptograph usage in the secure protocol.
- To understand the fundamental principles of API.

## TASKS
Following are the tasks for this lab session.

1. Implement a NodeJS application with HTTP endpoints and recreate the application with HTTPS endpoints.
2. Analyze HTTP and HTTPS using Wireshark.

## REFERENCES
1. [Node.js tutorial in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
2. [How to create a REST API with Node.js and Express](https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/)
3. [Routing ExpressJs](https://expressjs.com/en/guide/routing.html)
4. [Creating HTTPS endpoint](https://adamtheautomator.com/https-nodejs/)
5. [How to Secure Your NodeJS App with HTTPS and SSL Certificates](https://medium.com/@anandam00/how-to-secure-your-nodejs-app-with-https-and-ssl-certificates-e3afcd4533e9)
6. [How to Create an HTTPS NodeJS Web Service with Express](https://adamtheautomator.com/https-nodejs/)
7. [HTTP/HTTPS Analysis Using Wireshark](https://medium.com/devops-world/http-https-analysis-using-wireshark-cbe07c23520)

## DISCUSSION

To achieve these objectives, it was asked to implement a Node.js application with HTTP endpoints and then recreate the application with HTTPS endpoints. This was done to highlight the differences between the two protocols and the importance of using a secure protocol like HTTPS for web applications.

<div align="center">
  <img width="524" alt="Wireshark HTTP Output" src="https://github.com/user-attachments/assets/f4e37091-5ed2-4620-a63b-c27cefb1beed">

**Figure 01**: Wireshark capture showing the network traffic when HTTP protocol is used.
</div>


The analysis of HTTP and HTTPS using Wireshark was a crucial part of the lab. By capturing and examining the network traffic, the students were able to observe the differences between the two protocols. In the HTTP scenario (Figure 01), the network traffic was sent in plain text, revealing sensitive information such as the request and response headers and the content of the web pages. This demonstrates the vulnerability of using an unsecured protocol like HTTP, where an attacker could easily intercept and read the transmitted data.

<div align="center">
 <img width="524" alt="image" src="https://github.com/user-attachments/assets/ed381e9c-d33d-4794-bf12-20d39640a426">
 
**Figure 02**: Wireshark output when HTTPS is used
</div>
In contrast, the HTTPS scenario (Figure 02) showed encrypted network traffic, where the content of the web pages and sensitive information were not visible in the Wireshark capture. This illustrates the importance of using a secure protocol like HTTPS, which employs cryptographic techniques to ensure the confidentiality and integrity of the transmitted data.
The lab also covered the fundamental principles of the Application Programming Interface, which is an essential concept in modern web development. By implementing the Node.js application with HTTP and HTTPS endpoints, we gained a practical understanding of how APIs can be secured using HTTPS, protecting the application and its data from potential attacks.

# Codify

## Overview

**Codify**, a real time chat room application.


## Technologies Used 

**1.** Node.JS

**3.** Socket.IO

**4.** Express

**5.** Jade

## Prerequisites

1. [Jade] (<http://jade-lang.com/>), a Node.JS language that makes typing HTML way easier.

2. [Socket.IO](<http://socket.io/>) is JS library that lets you have real-time communication between your browser and server and vice-versa. Great for chat applications and stuff like that.
3. [Express](<http://expressjs.com/>) is an MVC manager (kind of like Rails to Ruby) that lets you organize your node projects.

4. [Node](<http://nodejs.org/>) is the programming language we're working with obviously.

Install node.JS with [Homebrew](<http://brew.sh/>):

	brew install node
	
If brew doesn't work with your OS try:

	git clone git://github.com/ry/node.git
	
	cd node
	./configure
	make
	sudo make install


Install Jade, Socket.IO, and express with:

	sudo npm install socket.io jade express

## Usage / Features

######Codify is a real time chat app with the following features:

1.  Choose your own username.

2.  Send signed messages into communal chat.

3.  Tell how long a message was sent.

4.  Tells how many users are online.


######Features I'm working on for the future:

1.  Add a web-cam feature.

2.  Add a communal text editor.
3. Add online compiler.

End goal is to create a team-based code editor that compiles on the server end. If this works and I can come up with some way to improve it, it could lead to a server side code collaborator so teams can program on the cloud! How cool would that be.


## Installation / Development

Clone the repository:


	git clone https://github.com/geracam/Codify.git
	



Start node server:

	node server.js


### Thanks

Huge thanks to all the articles about Node.js that people wrote. Too many to list but it's a fairly new language and it's awesome that people take the time to explain it for others.

#### About Me

Questions? Email <geracam@mit.edu>. 


> What troubles me is the Internet and the electronic technology revolution. Shyness is fueled in part by so many people spending huge amounts of time alone, isolated on e-mail, in chat rooms, which reduces their face-to-face contact with other people. -Philip Zimbardo

####LET'S MAKE SOME MAGIC!

#### Pictures

Here's the beginnings of this Codify project:


![Opening Page](http://i.imgur.com/8sNGRJ2.png)

The actual chat room:


![Chat Room](http://i.imgur.com/lWOA3ma.png)

And people's reactions to it:

![I wish](http://memecrunch.com/meme/1CSU/chat-room/image.jpg)


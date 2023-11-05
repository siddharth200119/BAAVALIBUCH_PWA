# BAAVALIBUCH PWA

The BAAVALIBUCH PWA is a NodeJS and ReactJS based web app which can be user to register users and with their friends and can be used to analyze their relation in a graphical manner using NetworkX.

##Installation

First go to the express-backend directory and open it in the terminal and write the following command: 
```bash
npm i
```

Now go to the frontend directory and open it in the terminal and write the following command: 
```bash
npm i
```

Lastly go to the Graph Analysis directory and open it in the terminal and write the following commands: 
```bash
pip install pymongo
pip install networkx
pip install matplotlib
```

## Usage

Start the backend: 

The default port is port 3000 which you can change according to your desire. type the following command in express-backend folder to start the server
```bash
node index.js
```
Start the frontend:

Type the following command in frontend folder to start the react frontend:
```bash
npm start
```

Graph Analysis: 

in the graph analysis folder run the Visualize.py file using the following command to get the output graph as an image file in the same folder

```bash
python Visualize.py
```
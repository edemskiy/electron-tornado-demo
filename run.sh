#!/bin/bash

python3 src/server.py & npm start && kill $!
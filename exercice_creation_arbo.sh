#!/bin/sh

echo "dossier target :"
echo $VAR
cd $VAR
mkdir repertoire1
mkdir repertoire2
cd repertoire1
> toto.txt
echo 42 > toto.txt

cd ../repertoire2
echo 645 > tata.txt

# -*- coding: utf-8 -*-
"""
Created on Fri Jul 21 19:22:24 2023

@author: Howard-MSI
"""
# import required libraries
import mysql.connector
import pandas as pd

# connecting to database in mysql
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "Arceuslugia2811!",
    database = "easydatabase"
)

# storing tables from mysql into dataframe
merchants_table = pd.read_sql("SELECT * FROM merchants", mydb)

# creating cursor object to allow to execute SQL queries
mycursor = mydb.cursor()

# enter sql queries to select tables
mycursor.execute("SELECT * FROM merchants")
myresult = mycursor.fetchall()
for row in myresult:
    print(row)

# close database connection
mydb.close()
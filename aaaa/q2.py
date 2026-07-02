# 2>.write a program remove duplicate email in csv input file will be four email id 
import pandas as pd
import sys
dataset_path = r"C:\Users\Shivam\Downloads\train.csv"
df_csv = pd.read_csv(dataset_path)
print("\n🔹 Unique \n", df_csv.nunique())

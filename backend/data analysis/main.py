import numpy as np
import pandas as pd

df = pd.read_csv('backend\data\co2emissions-per-capita.csv')
df = df.drop('Code', axis=1)

print(df.info())

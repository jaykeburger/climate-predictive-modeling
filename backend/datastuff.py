import pandas as pd
import os
import numpy as np
# import matplotlib.pyplot as plt
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras.callbacks import EarlyStopping,ModelCheckpoint
import os
import random

# load the data
path = 'data/2022-metrics-by-country.csv'
# print("")
# if os.path.exists(path):
#     print("The path IS valid:", path)
# else:
#     print("The path is not valid:", path)
pd.Dataframe = pd.read_csv(path)

import pandas as pd
import os
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
import os
import random
import seaborn as sns
import matplotlib.pyplot as plt

# load the data
path = '/data/annual-co2-emissions-per-country.csv'
df  = pd.read_csv(path)
df = pd.read_csv(path)
print(df.head())

countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Norway']
filtered_df = df[df['Entity'].isin(countries)]
# Split the data into training and test sets
train_df = df.sample(frac=0.8)
test_df = df.drop(train_df.index)

import matplotlib.pyplot as plt

# Assuming 'filtered_df' is your DataFrame that includes data for multiple countries of interest
countries_of_interest = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Norway']

plt.figure(figsize=(12, 8))  # Set the figure size for better readability

# Loop through each country and plot their emissions over time
for country in countries_of_interest:
    country_data = filtered_df[filtered_df['Entity'] == country]
    plt.plot(country_data['Year'], country_data['Annual CO₂ emissions'], label=country, marker='o')

# Adding plot details
plt.xlabel('Year', fontsize=14)
plt.ylabel('Annual CO2 Emissions', fontsize=14)
plt.title('CO2 Emissions Over Time for Selected Countries', fontsize=16)
plt.legend()  # This adds a legend using the labels specified in the plt.plot() calls

# Show grid for better readability
plt.grid(True)

# Show the plot
plt.show()


# Assuming you want to compare the year 2020
year_of_interest = 2020
data_2020 = filtered_df[filtered_df['Year'] == year_of_interest]

# Sort the data by 'Annual CO₂ emissions' in descending order to display from greatest to least
data_2020_sorted = data_2020.sort_values(by='Annual CO₂ emissions', ascending=False)

# Plotting
plt.figure(figsize=(10, 6))
plt.bar(data_2020_sorted['Entity'], data_2020_sorted['Annual CO₂ emissions'], color=['blue', 'red', 'green', 'cyan', 'yellow'])

# Adding labels and title
plt.xlabel('Country')
plt.ylabel('Annual CO2 Emissions')
plt.title(f'CO2 Emissions Comparison in {year_of_interest}')

# Show the plot
plt.show()
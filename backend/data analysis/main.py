import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns 

df = pd.read_csv('backend\data\co2emissions-per-capita.csv')
df = df.drop('Code', axis=1)

countries_of_interest = ['United States', 'United Kingdom', 'Canada', 'Norway', 'Australia']
subset_df = df[df['Entity'].isin(countries_of_interest)]

US_df = df[df['Entity'].isin(['United States'])]
UK_df = df[df['Entity'].isin(['United Kingdom'])]
Norway_df = df[df['Entity'].isin(['Canada'])]
Canada_df = df[df['Entity'].isin(['Norway'])]
Australia_df = df[df['Entity'].isin(['Australia'])]

plot = sns.scatterplot(x=df['Year'], y=df['Annual CO₂ emissions (per capita)'], hue='Entity', data=subset_df)
sns.move_legend(plot, "upper left", bbox_to_anchor=(1, 1))
plt.show()

from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

US_X = US_df['Year'].values.reshape(-1, 1)
US_y = US_df['Annual CO₂ emissions (per capita)'].values

US_X_train, US_X_test, US_y_train, US_y_test = train_test_split(US_X, US_y, test_size=0.2, random_state=42)

degree = 29  # You can adjust the degree of the polynomial
US_model = make_pipeline(PolynomialFeatures(degree), LinearRegression())
US_model.fit(US_X_train, US_y_train)

UK_X = UK_df['Year'].values.reshape(-1, 1)
UK_y = UK_df['Annual CO₂ emissions (per capita)'].values

UK_X_train, UK_X_test, UK_y_train, UK_y_test = train_test_split(UK_X, UK_y, test_size=0.2, random_state=42)

degree = 29  # You can adjust the degree of the polynomial
UK_model = make_pipeline(PolynomialFeatures(degree), LinearRegression())
UK_model.fit(UK_X_train, UK_y_train)

Norway_X = Norway_df['Year'].values.reshape(-1, 1)
Norway_y = Norway_df['Annual CO₂ emissions (per capita)'].values

Norway_X_train, Norway_X_test, Norway_y_train, Norway_y_test = train_test_split(Norway_X, Norway_y, test_size=0.2, random_state=42)

degree = 19  # You can adjust the degree of the polynomial
Norway_model = make_pipeline(PolynomialFeatures(degree), LinearRegression())
Norway_model.fit(Norway_X_train, Norway_y_train)

Canada_X = Canada_df['Year'].values.reshape(-1, 1)
Canada_y = Canada_df['Annual CO₂ emissions (per capita)'].values

Canada_X_train, Canada_X_test, Canada_y_train, Canada_y_test = train_test_split(Canada_X, Canada_y, test_size=0.2, random_state=42)

degree = 4  # You can adjust the degree of the polynomial
Canada_model = make_pipeline(PolynomialFeatures(degree), LinearRegression())
Canada_model.fit(Canada_X_train, Canada_y_train)

# Plot the original scatterplot
plt.scatter(US_X, US_y, label='US Actual Data', color='purple', s=4)
plt.scatter(UK_X, UK_y, label='UK Actual Data', color='red', s=4)
plt.scatter(Norway_X, Norway_y, label='Norway Actual Data', color='green', s=4)
plt.scatter(Canada_X, Canada_y, label='Canada Actual Data', color='orange', s=4)


# Plot the regression line
x_range = np.linspace(1800, 2050, 100).reshape(-1, 1)
US_y_range = US_model.predict(x_range)
UK_y_range = UK_model.predict(x_range)
Norway_y_range = Norway_model.predict(x_range)
Canada_y_range = Canada_model.predict(x_range)

plt.plot(x_range, US_y_range, color='purple', label=f'US Regression')
plt.plot(x_range, UK_y_range, color='red', label=f'UK Regression')
plt.plot(x_range, Norway_y_range, color='green', label=f'Norway Regression')
plt.plot(x_range, Canada_y_range, color='orange', label=f'Canada Regression')


plt.xlabel('Year')
plt.ylabel('Annual CO2 Emissions')
plt.title('CO2 Emissions vs Year')
plt.legend()
plt.show()

prediction_df = pd.DataFrame({'year': x_range.flatten(),
                               'US prediction': US_y_range,
                               'UK prediction': UK_y_range,
                               'Norway prediction': Norway_y_range,
                               'Canada prediction': Canada_y_range})

print(prediction_df)
prediction_df.to_json('prediction_data.json', orient='records')

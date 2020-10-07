import os
import pandas as pd
import sys
# Example: '$ python TimeSeriesAnalysis.py 3 M'
number_of_countries = int(sys.argv[1])  # 3
aggregation_time_interval = sys.argv[2]  # 'M'

path = os.path.dirname(os.path.abspath(__file__))


def covid19analysis(number_of_countries, aggregation_time_interval):
    df = pd.read_csv(f'{path}\\time_series_covid19_confirmed_global.csv')
    df = df.drop(columns=['Province/State', 'Lat', 'Long'])
    df = df.groupby('Country/Region').agg('sum')
    dfT = df.T
    df_time = pd.to_datetime(dfT.index)  # change index to datetime
    datetime_index = pd.DatetimeIndex(df_time.values)
    dfT = dfT.set_index(datetime_index)
    dfT = dfT.sort_values(by=dfT.index.values[-1], axis=1, ascending=False)
    dfT = dfT.iloc[:, 0:number_of_countries]
    dfT = dfT.resample(aggregation_time_interval).mean()
    output = dfT.to_json()
    print(output)
    sys.stdout.flush()


covid19analysis(number_of_countries, aggregation_time_interval)

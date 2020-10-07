import os
import sys
# Example: '$ python TimeSeriesAnalysis.py 3 M'
number_of_countries = int(sys.argv[1])  # 3
aggregation_time_interval = sys.argv[2]  # 'M'

path = os.path.dirname(os.path.abspath(__file__))


def covid19analysis(number_of_countries, aggregation_time_interval):
    print(number_of_countries)
    print(aggregation_time_interval)
    sys.stdout.flush()


covid19analysis(number_of_countries, aggregation_time_interval)

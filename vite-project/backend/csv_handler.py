import csv
from collections import defaultdict
from io import StringIO
def convert_text_to_dict(text) -> dict:
    time_chars = '0123456789:'
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    name = ''
    hours = []
    group = defaultdict(list)
    
    xx = 0
    while xx < len(lines):
        line = lines[xx]
        if line.isalpha():
            name = line
            if xx + 2 < len(lines) and (":" in lines[xx + 1] and ":" in lines[xx + 2]):
                hour1 = lines[xx + 1]
                hour2 = lines[xx + 2]
                group[name].append([hour1,hour2])

                xx += 2
        
        xx +=1
                
    return group



def convert_text_to_csv(text):
    hours_dict = convert_text_to_dict(text)
    csv_buffer = StringIO()
    fields = ['Name', 'Start', 'End']
    writer = csv.DictWriter(csv_buffer, fieldnames=fields)
    writer.writeheader()

    for name, hour_pairs in hours_dict.items():
        for hour_pair in hour_pairs:      
            writer.writerow({'Name': name, 'Start': hour_pair[0], 'End': hour_pair[1]})
            print(f"Writing row: {name}, {hour_pair[0]}, {hour_pair[1]}")
    
    return csv_buffer.getvalue()




# if __name__ == "__main__":
#     result = convert_text_to_dict(text)
#     print(result)
#     csv_file = convert_text_to_csv(text)
#     print(f"CSV file created: {csv_file}")
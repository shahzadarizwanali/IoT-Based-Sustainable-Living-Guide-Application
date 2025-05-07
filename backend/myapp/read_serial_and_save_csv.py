# code for collection of real-time data
import serial
import csv
import time

PORT = "COM10"       # Make sure this is correct
BAUD_RATE = 115200
CSV_FILE = "sensor_data.csv"

def initialize_csv():
    # Create the CSV file with header if it doesn't exist
    try:
        with open(CSV_FILE, mode='x', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['temperature (°C)', 'humidity (%)', 'MQ135 (CO₂, NH₃, C₆H₆)', 'MQ7 (CO)'])
    except FileExistsError:
        pass  # File already exists

def read_and_save_data():
    try:
        ser = serial.Serial(PORT, BAUD_RATE, timeout=2)
        print(f"✅ Connected to {PORT}")
    except Exception as e:
        print(f"❌ Could not open serial port {PORT}: {e}")
        return

    initialize_csv()

    try:
        while True:
            try:
                line = ser.readline().decode('utf-8').strip()

                if line.startswith("🌡 Temperature:"):
                    temperature = float(line.split(":")[1].split("°")[0].strip())

                    humidity_line = ser.readline().decode('utf-8').strip()
                    humidity = float(humidity_line.split(":")[1].split("%")[0].strip())

                    mq135_line = ser.readline().decode('utf-8').strip()
                    mq135_value = int(mq135_line.split(":")[1].strip())

                    mq7_line = ser.readline().decode('utf-8').strip()
                    mq7_value = int(mq7_line.split(":")[1].strip())

                    print(f"📥 Saving: Temp={temperature}, Humidity={humidity}, MQ135={mq135_value}, MQ7={mq7_value}")
                    with open(CSV_FILE, mode='a', newline='') as file:
                        writer = csv.writer(file)
                        writer.writerow([temperature, humidity, mq135_value, mq7_value])

                time.sleep(2)

            except Exception as e:
                print("⚠️ Error reading data:", e)

    except KeyboardInterrupt:
        print("🛑 Program stopped.")
    finally:
        ser.close()

if __name__ == "__main__":
    read_and_save_data()

import os

base_path = "/Users/Pranshu-Macbook/code/pr-react-common-lib/src/common/pictures"

for path, subdirs, files in os.walk(f"{base_path}/icons"):
    for name in files:
        file_path = os.path.join(path, name)
        print(file_path.replace(base_path,"."))
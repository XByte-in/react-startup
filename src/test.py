import os


for path, subdirs, files in os.walk("/Users/Pranshu-Macbook/code/pr-react-common-lib/src/common/pictures"):
    for name in files:
        print(os.path.join(path, name))
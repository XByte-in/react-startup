import os
import json
import ntpath

base_path = "/Users/Pranshu-Macbook/code/pr-react-common-lib/src/common/pictures"


def fast_scandir(dirname):    
    subfolders= [f.path.replace(f"{base_path}/icons/","") for f in os.scandir(dirname) if f.is_dir()]    
    return subfolders

folders = fast_scandir(f"{base_path}/icons")
result = {}
for folder in folders: 
    result[folder] = []
paths_with_spaces = []
for path, subdirs, files in os.walk(f"{base_path}/icons"):    
    for name in files:
        file_path = os.path.join(path, name)
        if ".DS_Store" not in file_path:
            import_path = file_path.replace(base_path,".")     
            index = import_path.index("px/")
            size_key = import_path[8:index+2]
            result[size_key].append(import_path)
            # print(ntpath.basename(import_path).replace(".png",""))
            if "__" in import_path:
                paths_with_spaces.append(import_path)
# for file in paths_with_spaces:
#     print(file)
for size_key in result.keys():
    for file in result[size_key]:
        file_name = ntpath.basename(file).replace(".png","")
        # print(f'import {file_name} from "{file}";')
# for size_key in result.keys():
#     print(f"export const {size_key}")
#     print("{")
#     for file in result[size_key]:
#         file_name = ntpath.basename(file).replace(".png","")
#         print(f"{file_name}:{file_name},")
#     print("}")
        #  print(f'import {file_name} from "{file}";')
# print(json.dumps(result, indent = 3))

#!/usr/bin/env python3
import os
import hashlib

def calculate_md5(file_path):
    """计算文件的MD5哈希值"""
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

# 遍历当前目录及其所有子目录
for root, dirs, files in os.walk('../assets/img/covers'):
    for filename in files:
        file_path = os.path.join(root, filename)
        
        # 仅处理JPG文件（不区分大小写）
        if filename.lower().endswith('.jpg') and os.path.isfile(file_path):
            # 计算MD5值
            md5_hash = calculate_md5(file_path)
            
            # 分离扩展名并生成新文件名
            file_ext = os.path.splitext(filename)[1]
            new_name = f"{md5_hash}{file_ext}"
            new_path = os.path.join(root, new_name)
            
            # 检查目标文件是否存在
            if os.path.exists(new_path):
                print(f"⚠️ 跳过 {filename}：{new_name} 已存在")
                continue
                
            # 执行重命名操作
            os.rename(file_path, new_path)
            print(f"✅ 已重命名：{filename} → {new_name}")

for root, dirs, files in os.walk('../assets/img/covers'):
    for filename in files:
        if filename.lower().endswith('.jpg'):
            print(f"    - {filename}")

print("\n操作完成！")

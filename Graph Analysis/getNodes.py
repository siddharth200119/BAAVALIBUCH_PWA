import pymongo
client = pymongo.MongoClient("localhost", 27017)
db = client.baavalibuchDB
print(db.name)

users_map = {}
friends_map = {}

for user in db.users.find():
    users_map[user["_id"]] = user["ID"]
    try:
        friends_map[user["_id"]] = user["friendID"]
    except:
        friends_map[user["_id"]] = None

final_map ={}

for key, value in friends_map.items():
    final_map[users_map[key]] = [users_map[user_id] for user_id in value]
    
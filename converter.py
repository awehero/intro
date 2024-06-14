import copy
# B = Block
# D = Finish


link = input('Input link here: ')
original_len = len(link)
link = link[56:]

letters = list('BCDGECFA')

prefix = 'https://onionfist.com/icedodo/?mapCodeVersion=v8&mapUrl='

map = {'': [], 'B': [], 'F': [], 'C': [], 'G': [], 'E': [], 'D': [], 'A': []}


def link2map(link):
    global map
    current = []
    lead = ''
    info = ''
    for char in link:
        if char in letters:
            map[lead].append(current)
            current.append(info)
            info = ''
            current = []
            lead = char
        elif char == '$':
            current.append(info)
            info = ''
        else:
            info += char

    map[lead].append(current)
    current.append(info)

    del map['']


def delete_empty():
    global map
    temp = []
    for key in map.keys():
        if not map[key]:
            temp.append(key)

    for del_ in temp:
        del map[del_]


def shorten_link():
    global map
    for key in map.keys():
        for item_n in range(len(map[key])):
            for element_n in range(len(map[key][item_n])):
                try:
                    map[key][item_n][element_n] = str(round(float(map[key][item_n][element_n])))
                except:
                    pass
                if map[key][item_n][element_n] == 'none':
                    map[key][item_n][element_n] = 'n'


def map2link():
    global map, prefix, original_len, link
    link = ''
    for key in map.keys():
        for item in map[key]:
            temp = key + '$'.join(item)
            link += temp
    URL = prefix + link
    new_len = len(URL)
    print('__________________________________________________________________________________\n')
    print(f'Original Length: {original_len}')
    print(f'New Length: {new_len}')
    print(f'Percentage Decreased: {round((original_len-new_len)/original_len*100, 2)}')
    print(f'Character Decreased: {original_len-new_len}')
    print()
    print(f'New URL: {URL}')
    print('Good luck with your map, hope it gets approved!')
    print('__________________________________________________________________________________\n')

with open('map_analyze.txt', 'w') as f:
    f.write(' ')

link2map(link)
delete_empty()
old_map = copy.deepcopy(map)
shorten_link()

with open('map_analyze.txt', 'a') as f:
    for key in map.keys():
        for item_n in range(len(map[key])):
            f.write('_____________________________\n')
            for element_n in range(len(map[key][item_n])):
                f.write(str(old_map[key][item_n][element_n]) + "   <----->   " + str(map[key][item_n][element_n]) + '\n')

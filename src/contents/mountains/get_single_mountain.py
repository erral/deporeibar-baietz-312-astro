import json
import requests
import os
def add_api(url):
    return url.replace("https://312.deporeibar.com/", "https://312.deporeibar.com/++api++/")

def main():
    mountain_url = add_api(
        "https://312.deporeibar.com/mendiak/aketegi?fullobjects"
    )
    mountain = requests.get(mountain_url)
    if mountain.ok:

        mountain_data = mountain.json()
        with open(f"{mountain_data['id']}.json", 'w') as fp:
            json.dump(mountain_data, fp)
        print(f"Done: {mountain_data['title']}")

    # template = []
    # export_default = {}
    # for index, filename in enumerate(os.listdir('.')):
    #     if filename.endswith('.json'):
    #         mountain_name = filename.split('.json')[0]
    #         template.append(
    #             f"import item_{index} from './{filename}';"
    #         )
    #         export_default[mountain_name] = f"item_{index}"

    # export_default_string = f"export default {export_default}"

    # with open('index.js', 'w') as fp:
    #     fp.write("\n".join(template))
    #     fp.write('\n')
    #     fp.write(export_default_string)

if __name__ == '__main__':
    main()

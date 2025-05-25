import json
import requests
import os


def add_api(url):
    return url.replace(
        "https://312.deporeibar.com/", "https://312.deporeibar.com/++api++/"
    )


def main():
    url = add_api("https://312.deporeibar.com/@search?portal_type=Igoera&path=/mendiak/pico-tendenera&b_size=9999")
    data = requests.get(url)
    if data.ok:
        items = data.json().get('items', [])
        for item in items:
            url = item.get('@id')
            mountain_url = add_api(f"{url}?fullobjects")
            mountain = requests.get(mountain_url)
            if mountain.ok:

                mountain_data = mountain.json()
                with open(f"{mountain_data['UID']}.json", 'w') as fp:
                    json.dump(mountain_data, fp)
                print(f"Done: {mountain_data['title']}")

    # template = []
    # export_default = {}
    # files = os.listdir(".")
    # files = ["pico-tendenera.json"]
    # for index, filename in enumerate(files):
    #     if filename.endswith(".json"):
    #         mountain_name = filename.split(".json")[0]
    #         template.append(f"import item_{index} from './{filename}';")
    #         export_default[mountain_name] = f"item_{index}"

    # export_default_string = f"export default {export_default}"

    # with open("index.js", "w") as fp:
    #     fp.write("\n".join(template))
    #     fp.write("\n")
    #     fp.write(export_default_string)


if __name__ == "__main__":
    main()

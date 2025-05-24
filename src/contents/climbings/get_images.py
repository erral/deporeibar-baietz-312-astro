import json
import requests
import os


def add_api(url):
    return url.replace(
        "https://312.deporeibar.com/", "https://312.deporeibar.com/++api++/"
    )


def main():
    for filename in os.listdir('.'):
    # for filename in [
    #     "312b98f7b1ff4ce19203122cfd047474.json",
    #     "1f9d1b8057264d5d927fb079405a0ee2.json",
    # ]:
        if filename.endswith('.json'):
            with open(filename) as fp:
                climbing = json.load(fp)
                photos = climbing.get('items', [])
                if photos:
                    photo_dir = f"images/{climbing['UID']}"
                    os.makedirs(photo_dir, exist_ok=True)
                    for photo in photos:
                        image = photo.get('image')
                        if image.get('content-type') == 'image/jpeg':
                            data = requests.get(image.get('download'))
                            if data.ok:
                                with open(f'{photo_dir}/{photo["UID"]}_{image["width"]}.jpg', 'wb') as fp_image:
                                    fp_image.write(data.content)

                            for scale_name, scale in image.get('scales', {}).items():
                                data = requests.get(scale.get('download'))
                                if data.ok:
                                    with open(f'{photo_dir}/{photo["UID"]}_{scale["width"]}.jpg', 'wb') as fp_image:
                                        fp_image.write(data.content)
        print(f"Done {filename}")

if __name__ == "__main__":
    main()

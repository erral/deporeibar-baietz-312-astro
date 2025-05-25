import json
import requests
import os


def add_api(url):
    return url.replace(
        "https://312.deporeibar.com/", "https://312.deporeibar.com/++api++/"
    )


def main():
    # for filename in os.listdir('.'):
    for filename in [
        "70ff745870ab4857be41372679093be0.json",
    ]:
        import pdb; pdb.set_trace(); a=1

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
                            print('Downloaded original')
                            for scale_name, scale in image.get('scales', {}).items():
                                data = requests.get(scale.get('download'))
                                if data.ok:
                                    with open(f'{photo_dir}/{photo["UID"]}_{scale["width"]}.jpg', 'wb') as fp_image:
                                        fp_image.write(data.content)
                                print(f'Downloaded {scale_name}')
        print(f"Done {filename}")

if __name__ == "__main__":
    main()

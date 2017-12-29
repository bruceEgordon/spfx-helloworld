import {IList} from './HelloWorldWebPart'

export default class HttpMockClient {
    private static _items: IList[] = [
        {Title: "Mock item 1", Id: "1"},
        {Title: "Mock item 2", Id: "2"},
        {Title: "Mock item 3", Id: "3"}
    ];

    public static get(): Promise<IList[]> {
        return new Promise<IList[]>((resolve) => {
            resolve(HttpMockClient._items);
        });
    }
}
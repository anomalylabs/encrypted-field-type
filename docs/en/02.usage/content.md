## Usage[](#usage)

This section will show you how to use the field type via API and in the view layer.


### Setting Values[](#usage/setting-values)

You can set the encrypted field type value with a string.

    $entry->example = "secret";


### Basic Output[](#usage/basic-output)

The editor field type returns the encrypted value unless `auto_decrypt` is enabled.

    $entry->example; // YzJWamNtVjBEUW89IFl6SldhbU50VmpCRVVXODk=


### Presenter Output[](#usage/presenter-output)

This section will show you how to use the decorated value provided by the `\Anomaly\EncryptedFieldType\EncryptedFieldTypePresenter` class.


#### EncryptedFieldTypePresenter::decrypt()[](#usage/presenter-output/encryptedfieldtypepresenter-decrypt)

The `decrypt` method decrypts the value.

###### Returns: `string`

###### Example

    $decorated->example->decrypt();

###### Twig

    {{ decorated.example.decrypt() }}


#### EncryptedFieldTypePresenter::hash()[](#usage/presenter-output/encryptedfieldtypepresenter-hash)

The `hash` method returns a hash of the decrypted value. This is nice for comparing encrypted values without exposing them.

###### Returns: `string`

###### Arguments

<table class="table table-bordered table-striped">

<thead>

<tr>

<th>Key</th>

<th>Required</th>

<th>Type</th>

<th>Default</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>

$algorithm

</td>

<td>

false

</td>

<td>

string

</td>

<td>

md5

</td>

<td>

The hashing algorithm to use. Valid options vary by machine.

</td>

</tr>

</tbody>

</table>

###### Example

    $decorated->example->hash('sha256');

###### Twig

    {{ decorated.example.hash('sha256') }}


#### EncryptedFieldTypePresenter::md5()[](#usage/presenter-output/encryptedfieldtypepresenter-md5)

The `md5` method maps to `hash('md5')`.

###### Returns: `string`

###### Example

    $decorated->example->md5();

###### Twig

    {{ decorated.example.md5() }}


#### EncryptedFieldTypePresenter::sha1()[](#usage/presenter-output/encryptedfieldtypepresenter-sha1)

The `sha1` method maps to `hash('sha1')`.

###### Returns: `string`

###### Example

    $decorated->example->sha1();

###### Twig

    {{ decorated.example.sha1() }}


#### EncryptedFieldTypePresenter::sha265()[](#usage/presenter-output/encryptedfieldtypepresenter-sha265)

The `sha256` method maps to `hash('sha256')`.

###### Returns: `string`

###### Example

    $decorated->example->sha256();

###### Twig

    {{ decorated.example.sha256() }}


#### EncryptedFieldTypePresenter::__value()[](#usage/presenter-output/encryptedfieldtypepresenter-value)

The `__value` method is used in various areas of the system and maps to `decrypt`.

###### Arguments

<table class="table table-bordered table-striped">

<thead>

<tr>

<th>Key</th>

<th>Required</th>

<th>Type</th>

<th>Default</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>

$collection

</td>

<td>

true

</td>

<td>

string

</td>

<td>

none

</td>

<td>

The collection to add the asset to.

</td>

</tr>

</tbody>

</table>

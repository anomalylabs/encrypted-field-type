<?php namespace Anomaly\EncryptedFieldType;

use Anomaly\Streams\Platform\Addon\FieldType\FieldType;

/**
 * Class EncryptedFieldType
 *
 * @link          http://pyrocms.com/
 * @author        PyroCMS, Inc. <support@pyrocms.com>
 * @author        Ryan Thompson <ryan@pyrocms.com>
 * @package       Anomaly\EncryptedFieldType
 */
class EncryptedFieldType extends FieldType
{

    /**
     * The database column type.
     *
     * @var string
     */
    protected $columnType = 'text';

    /**
     * The input view.
     *
     * @var string
     */
    protected $inputView = 'anomaly.field_type.encrypted::input';
}
